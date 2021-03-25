let download_btn = document.getElementsByClassName('navsecond')[0].querySelector('button')
console.log(download_btn)

download_btn.style.display = 'inline-block'
download_btn.innerText = 'Download'





let html_content =document.querySelector('.app_wiser')


download_btn.addEventListener('click',(e) => {
	console.log(e)
	console.log('download')

	document.getElementsByClassName('navsecond')[0].querySelector('button').style.display = 'none'
 
 	let opt = {
 		margin:10,
 		html2canvas:{scale:2,logging:true,dpi:192,letterRendering:true}	,
 		jsPDF : {unit:'mm',format:'a4',orientation:"portrait"}
 	}

  	html2pdf().from(html_content).save()
	document.getElementsByClassName('navsecond')[0].querySelector('button').style.display = 'block'
});



































