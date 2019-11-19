// second Dropdown
let dropdown2 = document.getElementById('repoId');
dropdown2.length = 0;

let defaultOption2 = document.createElement('option2');
defaultOption2.text = 20;

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

const url2 = 'http://augur.osshealth.io:5000/api/unstable/repos';

fetch(url2)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Error ' + 
          response.status + 'occured');  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
        if (object.onselect)
            function(){
            
          
    	for (let i = 0; i < data.length; i++) {
            
           
             if (document.getElementById('groupId') = data[i].repo_group_id){
        
            
                    option = document.createElement('option');
                    option.text = data[i].repo_id;
      	 
                    dropdown2.add(option);
                }
            }
    	}  
        
            });  
      //  });
      }
      
  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });