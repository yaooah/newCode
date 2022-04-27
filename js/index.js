// $(init)

// const init =()=> {
//   $("body").on('click','.m-btn', hideBox)
// }

asdasd
// const hideBox =()=> {
//   $(".box").hide(1000)
// }

const $ =(e)=> { return document.querySelector(e) }
const on =(e,cb)=> { $(e).addEventListener('click',cb) }
const f = ()=>{ $('.box').classList.add('hide') }
$('.m-btn').on('.box',f)
