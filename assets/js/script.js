;(function (document) {
	var toggle = document.querySelector(".sidebar-toggle")
	var sidebar = document.querySelector("#sidebar")
	var checkbox = document.querySelector("#sidebar-checkbox")
	var widths = [0, 500, 1000]
	if (window.innerWidth < widths[2]) {
		console.log("object")
		checkbox.removeAttribute("checked")
	}
	
	// Event listener for clicks on the toggle button (hamburger)
	toggle.addEventListener("click", function (e) {
		e.preventDefault() // Prevents the default scrolling behavior
		checkbox.checked = !checkbox.checked // Toggle the checkbox state
	})
	
	document.addEventListener(
		"click",
		function (e) {
			var target = e.target

			function resizeFn() {
				if (window.innerWidth < widths[2]) {
					console.log("small screen")
					// checkbox.checked = false
					if (
						!checkbox.checked ||
						sidebar.contains(target) ||
						target === checkbox ||
						target === toggle
					)
						return

					checkbox.checked = false
				}
			}
			window.onresize = resizeFn
			resizeFn()
		},
		false
	)
})(document)
