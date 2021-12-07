document.saveForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    var title = this.title.value.trim();
    var writer = this.writer.value.trim();
    var content = this.content.value.trim();
    if(!title){
        alert('도서명을 입력하세요')
        this.title.focus();
        return false;
    }
    this.submit(); 
}

// / 언어/book/api
// / 언어/api/shop


if(document.querySelector('#btRemoveCover'))
    document.querySelector('#btRemoveCover').addEventListener('click',onRemoveFile);
if(document.querySelector('#btRemoveFile'))
    document.querySelector('#btRemoveFile').addEventListener('click',onRemoveFile);
function onRemoveFile(e) {
    console.log(this.dataset['idx'])
    console.log(this.parentNode)
    var idx =this.dataset['idx'];
    var parent = this.parentNode;
    axios.delete('/api/book/file/'+idx).then(onSucess).catch(onError);
function onSucess(r){
    if(r.data.code === 200) parent.remove();
}
function onError(err){
console.log(err);
console.log(err.response);
    } 
} 