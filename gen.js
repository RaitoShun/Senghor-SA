    const triggers = document.querySelectorAll('a'); // find every link
    const highlight = document.createElement('span'); // create the span the will highlight
    highlight.classList.add('highlight');
    document.body.append(highlight);



    function highlightLink() {

      const linkCoords = this.getBoundingClientRect();
      console.log(this);
      const coords = { // compensate for scrolling
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
      };
      highlight.style.width = `${coords.width}px`
      highlight.style.height = `${coords.height}px`
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }

    triggers.forEach(a => a.childNodes.length > 1?null:a.addEventListener('mouseenter', highlightLink));