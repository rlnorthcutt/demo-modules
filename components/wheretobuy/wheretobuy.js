var wheretobuy = new Vue({ 
  el: '#app',
  data () {
      return {
          list: this.getBrandList(),
          brandID : this.getBrandID(),
          products: [],
          brands: [],
          title: "Where to buy",
          selected: 'NONE'
      }
  },
  created () {
    this.getProducts()
  },
  mounted () {
      
  },
  methods: {
      getProducts: function () {
        let endpoint = 'https://content-acsfdemo15-prod.acquia-demo.com/api/brand/' + this.brandID + '?_format=json';
        axios
        .get(endpoint)
        .then(response => {
          this.products = response.data
        })
      },
      getBrandList: function () {
        axios
        .get('https://content-acsfdemo15-prod.acquia-demo.com/api/brand?_format=json')
        .then(response => {
          this.brands = response.data
        })
      },
      getBrandID: function() {
        $id = 1;
        if (componentConfig = drupalSettings.pdb.configuration) {
          for (const key in componentConfig) {
              let component = componentConfig[key];
              if (component.hasOwnProperty('brand')) {
                $id = component.brand;
              }
            }
        }
        return $id;
      }
}
});