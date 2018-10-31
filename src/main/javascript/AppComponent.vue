<template>
    <div>
   <h1>This is my app</h1>
   <p>{{ message }}</p>
   <my-component></my-component>
   </div>
</template>
<script>
    import _ from "lodash"
   export default {
        data: function() {
            return {
                message: _.toLower("This Is Lower Case Lodash Right HERE!!!")
            }
        }
   }
</script>