if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service_worker.js")
    .then((registration) => {
      console.log("SW Registered! RGOS pdf viewer can be installed as a webapp!");
    })
    .catch((error) => {
      console.log("SW Registration Failed");
    });
} else {
  console.log("Not supported");
}
