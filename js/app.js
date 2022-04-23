{/* <div class="task-item">
   <span>aaaaa</span>
   <div class="buttons">
      <button class="check">
         <img src="img/check.svg" alt="">
      </button>
      <button class="delete">
         <img src="img/delete.svg" alt="">
      </button>
   </div>
</div> */}

const tasks = document.querySelector('.tasks');
const btn = document.querySelector('.plus');
const input = document.querySelector('.input');
let inputValue = input.value;


btn.addEventListener('click', (e) => {
   createElements(input.value);
   input.value = '';
});

function createElements(value) {
   const checkImagePath = 'img/check.svg';
   const deleteImagePath = 'img/delete.svg';


   if(value === '') return;


   const taskBlock = document.createElement('div');
   taskBlock.className = 'task-item';
   tasks.appendChild(taskBlock);

   let taskBlockSpan = document.createElement('span')
   taskBlockSpan.innerHTML = value;
   taskBlockSpan.className = 'block-span';
   taskBlock.appendChild(taskBlockSpan);

   let buttonsBlock = document.createElement('div');
   buttonsBlock.className = 'buttons';
   taskBlock.appendChild(buttonsBlock);

   let buttonCheck = document.createElement('button');
   buttonCheck.className = 'check';
   buttonsBlock.appendChild(buttonCheck);
   buttonCheck.addEventListener('click', () => {
      taskBlock.classList.toggle('active');
   });

   const checkImg = document.createElement('img');
   checkImg.src = checkImagePath;
   buttonCheck.appendChild(checkImg);

   let buttonDelete = document.createElement('button');
   buttonDelete.className = 'delete';
   buttonsBlock.appendChild(buttonDelete);
   buttonDelete.addEventListener('click', () => {
      taskBlock.remove();
   });

   const buttonDeleteImg = document.createElement('img');
   buttonDeleteImg.src = deleteImagePath;
   buttonDelete.appendChild(buttonDeleteImg);
}