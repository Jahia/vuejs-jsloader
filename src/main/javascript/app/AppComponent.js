import Vue from 'vue'
import _ from 'lodash';

console.log(_.toLower("This Is Lower Case Lodash Right HERE!!!"));

Vue.component('my-component', {
    data: function () {
        return {
            message: _.toLower("This Is Lower Case Lodash Right HERE!!!")
        }
    },
    template: '<div><h3>My component</h3><p>{{ message }}</p></div>'
});