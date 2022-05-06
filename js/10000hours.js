// js file
function submit() {
    document.getElementById('input_text').onsubmit = () => {
        if(this.dream.value === '' || this.hour.value === '') {
            alert('값을 모두 입력하세요.');
        } else {
        document.getElementById('output_dream').innerHTML = this.dream.value;
        document.getElementById('output_hour').innerHTML = Math.floor(10000/(this.hour.value));

        this.dream.value = "";
        this.hour.value = "";

        return false;
        }
    }
}
submit();

// 모달
const modal = document.getElementById("modalWrap");
const btnModal = document.getElementById("showModal");
btnModal.addEventListener("click", e => {
    modal.style.display = "inline"
});

const closeBtn = modal.querySelector(".closeModal");
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
});