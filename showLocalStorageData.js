function showLocalStorageData() {
    // Check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Retrieve data from local storage
        var storedData = localStorage.getItem("myData");

        // Check if data exists in local storage
        if (storedData !== null) {
            // Display the retrieved data
            console.log("Data stored in local storage:");
            console.log(storedData);
        } else {
            console.log("No data found in local storage.");
        }
    } else {
        console.log("Local storage is not supported by this browser.");
    }
}

