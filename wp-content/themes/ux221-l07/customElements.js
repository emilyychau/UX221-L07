class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

//
class TwoSidedMarket extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `<a href="side-a" class="item">Students</a>&ensp;&ensp;<a href="side-b" class="item">Employers</a>`;
		this.style.display = 'flex';
        this.style.justifyContent = 'center';
		const items = this.querySelectorAll('.item');
        items.forEach(item => {
            item.style.border = '2px solid black';
            item.style.margin = '2px';
            item.style.padding = '4px';
			item.style.borderRadius = '5px';
            item.style.display = 'inline-block'; 
			item.style.fontFamily = 'Montserrat, sans-serif';
        });
    }
}

customElements.define("x-twosided", TwoSidedMarket);
