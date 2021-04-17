---
title: novo titulo
description: um novo blog post
date: 2021-04-17 11:42:56
thumbnail: assets/img/volcano.jpg
category: JS
background: "#EB7728"
---
jdfgkjaçgkjdkfjgj

<!--StartFragment-->

 const changeAccountName = (ev) => {

    const userInput = ev.target.value.trim();

    dispatch(updatePreferences({ accountName: userInput }));

    if (userInput.includes('/') || userInput.includes(' ')) {

      setHasError(true);

    } else {

      setHasError(false);

    }

  };

<!--EndFragment-->

sdjfkadkjfh