<template>
    <div v-bind:style="styles">
       <h1>Experimental app with DX, VueJS and Javascript Loader</h1>
       <p>{{ message }}</p>
   </div>
</template>
<script>
    import _ from "lodash"
   export default {
        data: function() {
            return {
                message: _.toLower("Enjoy the View (pun intended)"),
                styles: {
                    display: "flex",
                    alignContent: "center",
                    flexDirection: "column",
                    color: "#888",
                    width: "100%",
                    height: "250px",
                    backgroundImage: "url('/modules/vuejs-jsloader/img/snow.jpg')",
                    backgroundPosition: "center",
                    backgroundPepeat: "no-repeat",
                    backgroundSize: "cover",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
        }
   }
</script>