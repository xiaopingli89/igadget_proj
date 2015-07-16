$("./body") {
  insert("footer", "Powered by", class: "mw-footer") {
    insert("div", class: "sprites-moovweb")
  }
}
$(".//div[@id='Footer']"){
	$(".//a"){
		remove()
	}
}
