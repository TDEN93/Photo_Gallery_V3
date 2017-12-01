function searchFilter() {
    // Variables
    var input, filter, gal, item, a, i;
    input = document.getElementById('searchBar');
    // Turn input into uppercase
    filter = input.value.toUpperCase();
    gal = document.getElementById("gallery");
    item = gal.getElementsByTagName('a');

    // Loop through all items, and hide those that don't match the search input
    for (i = 0; i < item.length; i++) {
        if (item[i].getAttribute("data-title").toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
        }
    }
}