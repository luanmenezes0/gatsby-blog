---
title: "Axios or fetch(): Which should you use?"
description: Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis,
  bibendum egestas augue arcu ut est. Interagi no mé, cursus quis, vehicula ac
  nisi. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non
  consequat odio. Pra lá , depois divoltis porris, paradis.
date: 2020-11-02 04:14:41
thumbnail: assets/img/london-aerial-cityscape-river-thames_1.jpg
category: JS
background: "#D6BA32"
---


Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Diuretics paradis num copo é motivis de denguis. Mé faiz elementum girarzis, nisi eros vermeio. **A ordem dos tratores não altera o pão duris.**



<!--StartFragment-->

```
axios({
  method: 'post',
  url: '/login',
  timeout: 4000,    // 4 seconds timeout
  data: {
    firstName: 'David',
    lastName: 'Pollock'
  }
})
.then(response => {/* handle the response */})
.catch(error => console.error('timeout exceeded'))
```

<!--EndFragment-->