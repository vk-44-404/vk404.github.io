(function(){

  
  $(document).ready(function() {
    
      $("#likeform").submit(function(event) {

        var input = $(this).children("input[name='thing']")
        var thing = $(input).val()

        if (thing.charAt(0) === "#" && thing.length === 7) {
            document.body.style.backgroundColor = thing
        }
        else {
            $("#likes").append("<li>" + thing + "</li>")
            $("#likes").on('click', 'li', function() {
                $(this).remove()
            })
        }
        $(input).val("")

        event.preventDefault()
      })
    
    })
  

})()


