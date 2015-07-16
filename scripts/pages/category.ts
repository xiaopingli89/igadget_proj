$("./body") {
  add_class("mw_category")
   
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
 
      $("./div[@class='Left']") {
        # Create Togglers
        $("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
          attribute("data-ur-set", "toggler")
          $("./h2") {
            attribute("data-ur-toggler-component", "button")
            insert("div", class: "mw_indicator")
          }
          $("./div") {
            attribute("data-ur-toggler-component", "content")
            $(".//li/a") {
              insert("div", class: "mw_arrow")
            }
          }
        }
   
        $(".//div[@id='SideNewsletterBox']") {
          remove()
        }
      }
   
      $("./div[@class='Content ']") {
        $("./div[@id='CategoryBreadcrumb']") {
          remove()
        }
        $("./div[@id='CategoryHeading']") {
          add_class('mw_bar1')
          $("./div[@class='BlockContent']") {
            # Move page title on top of the content area
            $("./h2") {
              move_to("../../../../div[@class='Left']", "top")
            }
            $("./div[@class='FloatRight SortBox']") {
              $("./form") {
                wrap_text_children("span")
              }
            }
          }
        }
        $(".//div[@id='CategoryContent']"){
            attribute("data-ur-set", "carousel")
            attribute("data-ur-infinite", "disabled")
            attribute("data-ur-autoscroll", "enabled")
            insert("div"){
              attribute("data-ur-carousel-component", "dots")
            }
            $(".//form[@id='frmCompare']"){
              $(".//ul[@class='ProductList ']"){
                attribute("data-ur-carousel-component","scroll_container")
                $("./li"){
                  attribute("data-ur-carousel-component","item")
                }
              }
              $(".//div[@class='CompareButton']"){
                remove()
              }
            }
        }
      }
      $("./div[@class='Right']"){
        $(".//div[@class='BlockContent']"){
          attribute("data-ur-set", "carousel")
            attribute("data-ur-infinite", "disabled")
            attribute("data-ur-autoscroll", "enabled")
            insert("div"){
              attribute("data-ur-carousel-component", "dots")
            }
            $(".//ul[@class='ProductList']"){
              attribute("data-ur-carousel-component","scroll_container")
            
              $("./li"){
                attribute("data-ur-carousel-component","item")
              }
            }
        }
      }
    }
  }
}