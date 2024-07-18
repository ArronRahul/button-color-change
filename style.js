document.addEventListener('DOMContentLoaded', () => {
    const colors = [
      'red', 'green', 'blue', 'yellow', 'white', 'orange',
      'purple', 'pink', 'brown', 'gray', 'cyan', 'magenta', 'lime',
      'teal', 'navy', 'olive', 'maroon', 'coral', 'gold', 'silver',
      'indigo', 'violet', 'turquoise', 'orchid', 'salmon', 'khaki',
      'lavender', 'tan', 'crimson', 'slategray', 'peru', 'darkorange',
      'lightseagreen', 'midnightblue', 'mediumorchid', 'cadetblue',
      'darkslateblue', 'firebrick', 'forestgreen', 'darkcyan'
    ];
  
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const currentColor = colors[randomIndex];
      button.style.backgroundColor = currentColor;
      button.textContent = currentColor;

      button.addEventListener('click', () => {
        const a=button.textContent;

        if(a === currentColor){
            const randomIndex = Math.floor(Math.random() * colors.length);
            const Color = colors[randomIndex];
            button.style.backgroundColor = Color;
            button.textContent = Color;
        }
        else{
            button.style.backgroundColor=currentColor;
            button.textContent = currentColor;
        }
      })

  });

})
  