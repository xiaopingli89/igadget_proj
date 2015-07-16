# Place holder/example file
$("./body") {
   
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
 
      $("./div[@class='Left']") {
        
   		remove()
      }
   
      $("./div[@class='Content']") {
        $("./div[@id='HomeFeaturedProducts']"){
        	$("./div[@class='BlockContent']"){
        		attribute("data-ur-set", "carousel")
        		attribute("data-ur-infinite", "disabled")
        		attribute("data-ur-autoscroll", "enabled")
        		insert("div"){
        			attribute("data-ur-carousel-component", "dots")
        		}
        	}

        	$(".//ul[@class='ProductList']"){
        		attribute("data-ur-carousel-component","scroll_container")
        		
        		$("./li"){
        			attribute("data-ur-carousel-component","item")
        		}
        	}
        }
        $("./div[@id='HomeNewProducts']"){
        	$("./div[@class='BlockContent']"){
        		attribute("data-ur-set", "carousel")
        		attribute("data-ur-infinite", "disabled")
            attribute("data-ur-autoscroll", "enabled")
            insert("div"){
              attribute("data-ur-carousel-component", "dots")
            }
        	}

        	$(".//ul[@class='ProductList']"){
        		attribute("data-ur-carousel-component","scroll_container")
        		
        		$("./li"){
        			attribute("data-ur-carousel-component","item")
        		}
        	}
        }
      }
      $("./div[@class='Right']") {
        
   		remove()
      }
    }
  }
}