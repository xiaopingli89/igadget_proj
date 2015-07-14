# $('./body') {
#   insert_top("header", class: "mw-header") {
#     Move stuff here
#   }
# }
$("//div[@id='SearchForm']/form//input[@type='image']") {
  wrap("div", class: "mw_search_btn sprites-search")
  attribute("style", "opacity:0;")
}

$(".//div[@id='Header']") {
    attribute("data-ur-set", "toggler")
  	$("./div[@id='Logo']") {
    	# Move top menu into #Logo container
    	move_here("../../../div[@id='TopMenu']", "bottom") {
    		# Remove unwanted top menu items from upper menu
    		remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
  		}
      move_here("//div[@id='TopMenu']/ul") {
        $("./li[@class='First']"){
          insert("img", src: asset("images/sprites/cart.png"))
          $("./a"){
            remove_text_nodes()
          }
        }
        $("./li[@class='CartLink']"){
          insert("img", src: asset("images/sprites/user.png"))
          $("./a"){
            remove_text_nodes()
            $("./span"){
              remove_text_nodes()
            }
          }
        }
      }
  	}
  	# Insert HTML for bottom of header
	insert("div", class: "mw_header_bottom") {
  		insert("div", class: "mw_search")
  		insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
	}

	# Fill search HTML
	$("..//div[@class='mw_search']") {
  		# Move search form into container element
  		move_here("//div[@id='SearchForm']", "bottom") {
    		remove("./p")
    		$("./form") {
      			remove("./label")
      			# Change search button background image
      			$("./input[@type='image']") {
        			wrap("div", class: "mw_search_btn sprites-search")
      			}
      			$("./input[@type='text']") {
        			attribute("placeholder", "Search...")
      			}
    		}
  		}
	}
	# Move menu items into header
	move_here("../div[@id='Menu']", "bottom") {
  		attribute("data-ur-toggler-component", "content")
  		# Move "Category List" element on bottom of #Menu element
  		move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
  		$$("li") {
    		add_class("mw_bar2")
  		}
	}
}
remove(".//div[@id='AjaxLoading']") 
remove(".//div[@id='TopMenu']")
