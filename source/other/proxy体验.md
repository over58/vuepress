---
title: proxy体验
author:
  - 徐勇超

  - js
  - es6
date: 2019-09-16 19:22:32

  - js知识库
---

### todoList
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
    <div id="app">
      <input type="text" id="input">
      <div>
        TODO:
        <span id="text"></span>
      </div>
      <button id="btn">Add To Todo List</button>
      <ul id="list"></ul>
    </div>
    <script>
      const input = document.getElementById('input')
    const text = document.getElementById('text')
    const list = document.getElementById('list')
    const btn = document.getElementById('btn')

    let render

    const inputObj = new Proxy({}, {
      get (target, key, receiver) {
        return Reflect.get(target, key, receiver)
      },
      set (target, key, value, receiver) {
        if (key === 'text') {
          input.value = value
          text.innerHTML = value
        }
        return Reflect.set(target, key, value, receiver)
      }
    })

    class Render {
      constructor (arr) {
        this.arr = arr
      }
      init () {
        const fragment = document.createDocumentFragment()
        for (let i = 0; i < this.arr.length; i++) {
          const li = document.createElement('li')
          li.textContent = this.arr[i]
          fragment.appendChild(li)
        }
        list.appendChild(fragment)
      }
      addList (val) {
        const li = document.createElement('li')
        li.textContent = val
        list.appendChild(li)
      }
    }

    const todoList = new Proxy([], {
      get (target, key, receiver) {
        return Reflect.get(target, key, receiver)
      },
      set (target, key, value, receiver) {
        console.log(target, key, value, receiver)
        if (key !== 'length') {
          render.addList(value)
        }
        return Reflect.set(target, key, value, receiver)
      }
    })

    window.onload = () => {
      render = new Render([])
      render.init()
    }

    input.addEventListener('keyup', e => {
      inputObj.text = e.target.value
    })

    btn.addEventListener('click', () => {
      todoList.push(inputObj.text) // 每次 增加和删除 都会引起 length 的改变
      inputObj.text = ''
    })
    console.log(todoList)
    </script>
</body>
</html>
```
