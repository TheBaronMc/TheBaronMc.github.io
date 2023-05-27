function applyCustomListCallbacks(cutomListElement) {
    for (let item of cutomListElement) {
        let title = item.getElementsByClassName('item-title')[0]
        
        title.addEventListener('click', () => {
            if (item.classList.contains('disable')) {
                return
            }
    
            let others = []
            for (let other of cutomListElement) {
                if (other != item)
                    others.push(other)
            }
    
            if (item.classList.contains('open')) {
                item.classList.remove('open')
                others.forEach(o => o.classList.remove('disable'))
            } else {
                item.classList.add('open')
                others.forEach(o => o.classList.add('disable'))
            }
        })
    }
}

['.education-section .section-content .item-list',
'.work-section .section-content .item-list']
.forEach((query) => {
    applyCustomListCallbacks(document.querySelectorAll(query))
})