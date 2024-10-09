import Spline from '@splinetool/react-spline/next';
let button = document.getElementById("btn")
 
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Indore';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '59c0f86eabmsha1b2648acae0304p1f076cjsn8d7554b42236',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

const fetchapi = async ()=>{
 
  try {
	  const response = await fetch(url, options);
	  const result = await response.json();
	  console.log(result);
  } catch (error) {
	  console.error(error);
  }
	
  }


button.addEventListener("click",()=>{
	  fetchapi()
})


export default function Home() {
  return (
    <main>
      <Spline
        scene="loading..." 
      />
    </main>
  );
}

 
