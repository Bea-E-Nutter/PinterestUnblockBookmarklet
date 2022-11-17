//Pure JS
links = document.querySelectorAll("[href]")
for(link_iterator = 0; link_iterator < links.length; link_iterator = link_iterator + 1) {
    parsed = new URL(links[link_iterator].href)
    if(!(parsed.hostname == "www.pinterest.com")) {continue;} else {
        new_link = "https://" + parsed.hostname.split(".com")[0] +".in" + parsed.pathname
        links[link_iterator].attributes.new_url = new_link
        links[link_iterator].href = "javascript:redirect"
        links[link_iterator].onclick = (d) => {
            d.path.forEach(element => {
                if(element.href == "javascript:redirect") {
                    location = element.attributes.new_url;
                }
            });
        }
    }
}
