// Get all the links in the navbar
let navlinks = document.getElementsByClassName('navbar-link');

// For each links set a callback on click
for (let navlink of navlinks) {
    navlink.addEventListener('click', () => {
        let targetClassList = navlink.classList

        if (targetClassList.contains('active'))
            return
            

        // Disable desactive link(s) in link list
        for (let other of navlinks) {
            let otherClassList = other.classList;

            if (other != navlink && otherClassList.contains('active')) {
                otherClassList.remove('active');
                otherClassList.add('inactive');
            }
        }

        targetClassList.remove('inactive')
        targetClassList.add('active')
    });
}