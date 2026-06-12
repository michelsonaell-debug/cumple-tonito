
const photos=[...Array(20)].map((_,i)=>`fotos/F${i+1}.JPG`);
let i=0;

function openGift(){
 document.querySelector('.gift3d').classList.add('open');
 setTimeout(()=>{
   document.getElementById('start').style.display='none';
   document.getElementById('content').classList.remove('hidden');
   setInterval(heart,400);
   confetti();
 },900);
}

function next(){i=(i+1)%photos.length;photo.src=photos[i]}
function prev(){i=(i-1+photos.length)%photos.length;photo.src=photos[i]}

function heart(){
 let h=document.createElement('div');
 h.className='heart'; h.innerHTML='❤️';
 h.style.left=Math.random()*100+'vw';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),6000);
}

function confetti(){
 const c=document.getElementById('confetti'),x=c.getContext('2d');
 c.width=innerWidth;c.height=innerHeight;
 let p=[...Array(120)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*4+2}));
 (function a(){
  x.clearRect(0,0,c.width,c.height);
  p.forEach(o=>{x.fillStyle='red';x.fillRect(o.x,o.y,o.r,o.r);o.y+=2;if(o.y>c.height)o.y=0;});
  requestAnimationFrame(a);
 })();
}
