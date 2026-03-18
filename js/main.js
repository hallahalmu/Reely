// ======== بيانات الأفلام ========
const movies = [
  {
    title:"Finding Nemo",
    category:"animals",
    img:"finding-nemo.jpg",
    year:2003,
    lang:"الإنجليزية",
    status:"now",
    description:"قصة سمكة صغيرة تضيع في المحيط ويحاول والدها عبور البحر لإنقاذها.",
    dates:{
      "2026-04-01":["10:00","13:00","16:00"],
      "2026-04-02":["11:00","15:00","18:00"],
      "2026-04-03":["12:00","17:00"]
    }
  },
  {
    title:"Finding Dory",
    category:"animals",
    img:"finding-dory.jpg",
    year:2016,
    lang:"الإنجليزية",
    status:"now",
    description:"رحلة دورِي للعثور على عائلتها المفقودة.",
    dates:{
      "2026-04-01":["11:00","14:00","19:00"],
      "2026-04-02":["10:00","16:00"],
      "2026-04-03":["12:00","18:00"]
    }
  },
  {
    title:"The Good Dinosaur",
    category:"adventure",
    img:"good-dinosaur.jpg",
    year:2015,
    lang:"الإنجليزية",
    status:"soon",
    description:"ديناصور صغير ينطلق في رحلة لاكتشاف العالم.",
    dates:{
      "2026-04-01":["12:00","17:00"],
      "2026-04-02":["14:00","19:00"],
      "2026-04-03":["15:00"]
    }
  },
  {
    title:"Ice Age",
    category:"comedy",
    img:"ice-age.jpg",
    year:2002,
    lang:"الإنجليزية",
    status:"now",
    description:"مجموعة من الحيوانات تحاول إعادة طفل بشري إلى عائلته.",
    dates:{
      "2026-04-01":["09:00","13:00"],
      "2026-04-02":["11:00","17:00"],
      "2026-04-03":["15:00"]
    }
  },
  {
    title:"Despicable Me",
    category:"comedy",
    img:"despicable-me.jpg",
    year:2010,
    lang:"الإنجليزية",
    status:"now",
    description:"مجرم سابق يحاول سرقة القمر لكنه يتغير بسبب ثلاث فتيات صغيرات.",
    dates:{
      "2026-04-01":["10:00","14:00"],
      "2026-04-02":["12:00","18:00"],
      "2026-04-03":["16:00"]
    }
  },
  {
    title:"Minions",
    category:"comedy",
    img:"minions.jpg",
    year:2015,
    lang:"الإنجليزية",
    status:"soon",
    description:"مغامرات المينيون المضحكة في البحث عن قائد شرير.",
    dates:{
      "2026-04-01":["11:00","15:00"],
      "2026-04-02":["13:00","19:00"],
      "2026-04-03":["17:00"]
    }
  },
  {
    title:"The Secret Life of Pets",
    category:"animals",
    img:"secret-life-pets.jpg",
    year:2016,
    lang:"الإنجليزية",
    status:"now",
    description:"ماذا تفعل الحيوانات الأليفة عندما يخرج أصحابها من المنزل؟",
    dates:{
      "2026-04-01":["10:00","14:00"],
      "2026-04-02":["12:00","18:00"],
      "2026-04-03":["16:00"]
    }
  },
  {
    title:"Boss Baby",
    category:"comedy",
    img:"boss-baby.jpg",
    year:2017,
    lang:"الإنجليزية",
    status:"soon",
    description:"طفل يتصرف كرجل أعمال ويخوض مغامرات مضحكة.",
    dates:{
      "2026-04-01":["09:00","13:00"],
      "2026-04-02":["11:00","17:00"],
      "2026-04-03":["15:00"]
    }
  },
  {
    title:"Frozen",
    category:"fantasy",
    img:"frozen.jpg",
    year:2013,
    lang:"الإنجليزية",
    status:"now",
    description:"أميرة تملك قوى جليدية تحاول السيطرة عليها.",
    dates:{
      "2026-04-01":["10:00","14:00","19:00"],
      "2026-04-02":["12:00","16:00"],
      "2026-04-03":["18:00"]
    }
  },
  {
    title:"Tangled",
    category:"fantasy",
    img:"tangled.jpg",
    year:2010,
    lang:"الإنجليزية",
    status:"now",
    description:"قصة الأميرة رابونزل وشعرها السحري الطويل.",
    dates:{
      "2026-04-01":["11:00","15:00"],
      "2026-04-02":["13:00","19:00"],
      "2026-04-03":["17:00"]
    }
  },
  {
    title:"Moana",
    category:"adventure",
    img:"moana.jpg",
    year:2016,
    lang:"الإنجليزية",
    status:"soon",
    description:"فتاة شجاعة تبحر عبر المحيط لإنقاذ شعبها.",
    dates:{
      "2026-04-01":["12:00","16:00"],
      "2026-04-02":["14:00","18:00"],
      "2026-04-03":["19:00"]
    }
  },
  {
    title:"Cinderella",
    category:"fantasy",
    img:"cinderella.jpg",
    year:1950,
    lang:"الإنجليزية",
    status:"now",
    description:"القصة الكلاسيكية للفتاة التي تتحول حياتها بفضل السحر.",
    dates:{
      "2026-04-01":["09:00","13:00"],
      "2026-04-02":["11:00","17:00"],
      "2026-04-03":["15:00"]
    }
  },
  {
    title:"The Lion King",
    category:"animals",
    img:"lion-king.jpg",
    year:1994,
    lang:"الإنجليزية",
    status:"now",
    description:"أسد صغير يتعلم معنى المسؤولية والقيادة.",
    dates:{
      "2026-04-01":["10:00","14:00","18:00"],
      "2026-04-02":["12:00","16:00"],
      "2026-04-03":["19:00"]
    }
  },
  {
    title:"Encanto",
    category:"fantasy",
    img:"encanto.jpg",
    year:2021,
    lang:"الإنجليزية",
    status:"soon",
    description:"عائلة تمتلك قوى سحرية تعيش في منزل عجيب.",
    dates:{
      "2026-04-01":["11:00","15:00"],
      "2026-04-02":["13:00","19:00"],
      "2026-04-03":["17:00"]
    }
  },
  {
    title:"Inside Out",
    category:"comedy",
    img:"inside-out.jpg",
    year:2015,
    lang:"الإنجليزية",
    status:"now",
    description:"مشاعر فتاة صغيرة تتحكم في حياتها من داخل عقلها.",
    dates:{
      "2026-04-01":["10:00","14:00"],
      "2026-04-02":["12:00","18:00"],
      "2026-04-03":["16:00"]
    }
  },
  {
    title:"Coco",
    category:"fantasy",
    img:"coco.jpg",
    year:2017,
    lang:"الإسبانية / الإنجليزية",
    status:"soon",
    description:"طفل يعشق الموسيقى يسافر إلى عالم الأرواح.",
    dates:{
      "2026-04-01":["11:00","15:00","19:00"],
      "2026-04-02":["13:00","17:00"],
      "2026-04-03":["18:00"]
    }
  }
];

// ======== عرض الأفلام ========
const container = document.getElementById("movieContainer");

function showMovies(list){
  container.innerHTML = "";
  list.forEach(movie=>{
    const card=document.createElement("div");
    card.className="movie-card";
    card.innerHTML=`
      <img src="images/posters/${movie.img}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${translateCategory(movie.category)}</p>
        <span>اللغة: ${movie.lang}</span>
        <span>الإصدار: ${movie.year}</span>
        <span>${movie.status==="now" ? "يعرض الآن" : "قريباً"}</span>
        <button onclick="goToDetails('${movie.title}')">شاهد التفاصيل</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function goToDetails(title){
  window.location.href="details.html?title="+encodeURIComponent(title);
}

function translateCategory(cat){
  switch(cat){
    case "adventure": return "مغامرات | Animation";
    case "comedy": return "كوميديا | Animation";
    case "fantasy": return "خيال | Animation";
    case "animals": return "حيوانات | Animation";
    default: return "Animated Movie";
  }
}

// ======== الفلتر والبحث ========
function applyFilters(){ filterAndSearch(); }
function searchMovies(){ filterAndSearch(); }

function filterAndSearch(){
  const cat = document.getElementById("category").value;
  const st = document.getElementById("status").value;
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  let result = [...movies];

  if(cat!=="all") result = result.filter(m=>m.category===cat);
  if(st!=="all") result = result.filter(m=>m.status===st);
  if(searchTerm) result = result.filter(m=>m.title.toLowerCase().includes(searchTerm));

  showMovies(result);
}

// ======== تسجيل الدخول / تسجيل خروج ========
const loginBtn=document.getElementById("loginBtn");
const logoutBtn=document.getElementById("logoutBtn");

function checkLogin(){
  if(localStorage.getItem("loggedIn")==="true"){
    loginBtn.textContent="حسابي";
    logoutBtn.style.display="inline-block";
    loginBtn.onclick=()=>{ alert("مرحبا بك في حسابك"); };
  }else{
    loginBtn.textContent="تسجيل الدخول";
    logoutBtn.style.display="none";
    loginBtn.onclick=()=>{ window.location.href="login.html"; };
  }
}

logoutBtn.onclick=()=>{
  localStorage.removeItem("loggedIn");
  location.reload();
};

// ======== حفظ البيانات وتشغيل الصفحة ========
localStorage.setItem("moviesData", JSON.stringify(movies));
window.onload = ()=>{
  showMovies(movies);
  checkLogin();
};

// ======== فتح صفحات العروض والفروع ========
document.getElementById("offersLink").onclick = () => {
  window.location.href = "offers.html";
};

document.getElementById("branchesLink").onclick = () => {
  window.location.href = "branches.html";
};

// ======== زر البحث في الهيدر ========
document.getElementById("searchLink").addEventListener("click", (e)=>{
  e.preventDefault(); // يمنع الرابط الافتراضي #
  const filtersSection = document.querySelector(".filters");
  filtersSection.scrollIntoView({behavior:"smooth"});
  document.getElementById("searchInput").focus();
});
