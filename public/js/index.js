let background_image = document.querySelector('.img_background')

// 
// background_image.addEventListener('click',(e) => {
//   	let bg_image = prompt("Enter the image url")
// 
//   	if(bg_image!=undefined || bg_image!=null || bg_image!=''){
//   		background_image.style.background = `url(img/b1.png),url(${bg_image})`
//   		console.log('image changed')
//   	}
// });
// 

let skill_range = document.getElementsByClassName('skill_range')


function percentage_maker () {
	Array.from(skill_range).forEach((item) => {
  let range_index = item.getElementsByClassName('range_index')[0]
  let percentage = item.getElementsByClassName('percentage')[0].innerText.replace('%','%') 
  let percentage_index = parseInt( item.getElementsByClassName('percentage')[0].innerText.replace('%','') )

  if(percentage_index>100){
 	 
  }else{
  	range_index.style.width = percentage
  }
                                


})
}

percentage_maker();



let percentage = document.getElementsByClassName('percentage')

Array.from(percentage).forEach((item) => {
  item.addEventListener('blur',(e) => {
      item.innerText = e.target.innerText
      percentage_maker()
  });
})






let services_img = document.getElementsByClassName('services-img') 

Array.from(services_img).forEach((item) => {
	console.log(item)
  item.addEventListener('click',(e) => {
        item_img = item.querySelector('img')
        image_url = prompt("Enter the image url")
        console.log('the image url is ',image_url)
        if(image_url == null){
        }else{

        		item_img.src = image_url
        }	

  });
})




let contact_image = document.getElementsByClassName('contact-image')[0]

contact_image.addEventListener('click',(e) => {
  	let image = contact_image.querySelector('img')

  	contact_image_url = prompt("Enter the image url")
  	if(contact_image_url == null){

  	}else{

  		image.src = contact_image_url
  	}	
});




let about_image = document.getElementsByClassName('about-image')[0]

about_image.addEventListener('click',(e) => {
  	let about_image_image = about_image.querySelector('img')

  	about_image_url = prompt("Enter the image url")
  	if(about_image_url == null){

  	}else{

  		about_image_image.src = about_image_url
  	}	
});



let save = document.getElementById('save')
save.addEventListener('click',(e) => {
  	save.style.display = 'none'

  	let xhr = new XMLHttpRequest()

  	xhr.open('POST','/save',true)
  	xhr.setRequestHeader('Content-type', 'application/json')

    title = prompt("please enter a title ")

  	data = {"data":String(document.all[0].innerHTML),"title":title}

  	params = JSON.stringify(data)

  	xhr.send(params)

});









