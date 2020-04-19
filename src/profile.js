let content= document.querySelector(".root");

function profile () {
    content.innerHTML='';
    let profileView= `
    <section>
    <div class="previewImages"> </div>
    </section>`
    content.innerHTML= profileView;
}

export default profile;