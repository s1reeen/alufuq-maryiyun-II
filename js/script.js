document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        function createHighLoad() {
            console.log("High load!");
        }

        while (true) {
            createHighLoad();
        }
        
        alert("Test started");
    }, 2000);
});
