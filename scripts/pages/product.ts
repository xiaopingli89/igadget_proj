# Place holder/example file
$("./body") {
   
   $("./div[@id='fancy_outer']"){
    remove()
   }
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
 
      $("./div[@class='Left']") {
        
   		remove()
      }
   
      $("./div[@class='Content']") {
        $(".//div[@id='ProductBreadcrumb']"){
          remove()
        }
        $(".//div[contains(@class, 'AddThisButtonBox')]"){
          remove()
        }
        $("//*[@id='SimilarProductsByCustomerViews']"){
          remove()
        }
        $("//*[@id='ProductByCategory']"){
          remove()
        }
        $("./div[@id='ProductDetails']"){
          $("./div[@class='BlockContent']"){
            $("./div[@class='ProductThumb']"){
              $("./div[@class='ImageCarouselBox']"){
                $("./a[@id='ImageScrollNext']"){
                  remove()
                }
              }
            }
          }
          
        }
        $(".//div[@class='ProductMain']"){
          //add_class('test'){
            $(".//div[contains(@class, 'AddCartButton')]"){
              $("./div[@class='BulkDiscount']"){
                $("./input"){
                  //remove()
                }
                //insert_top("input", type: "button", width: "inherent")
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


//*[@id="productDetailsAddToCartForm"]/div/div[3]/div[2]/div/div/a