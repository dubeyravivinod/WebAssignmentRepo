const store = document.getElementById("tableData");
store.innerHTML = "";
emojiList.map((ele) => {
    
    store.innerHTML += `
    <tr>
        <td id="EmojiIcon">${ele.emoji}</td>
        <td id="EmojiTags">${ele.aliases}</td>
        <td id="EmojiName">${ele.description}</td>
    </tr>
    `
})

function getInput() {

    const store = document.getElementById("tableData");
    store.innerHTML = "";
    const inputText = document.getElementById("input").value;
    console.log(inputText.toLowerCase());

    const filteredData = []
    emojiList.map((ele) => {
        if(ele.tags.includes(inputText.toLowerCase())) {
            filteredData.push(ele);
            store.innerHTML += `
            <tr>
                <td id="EmojiIcon">${ele.emoji}</td>
                <td id="EmojiTags">${ele.aliases}</td>
                <td id="EmojiName">${ele.description}</td>
            </tr>
            `
        }
    })
    console.log(filteredData);   
}

function getLoad() {
    const store = document.getElementById("tableData");
    store.innerHTML = "";
    const inputText = (document.getElementById("input").value).trim();
    console.log(inputText.toLowerCase());

    const filteredData = []
    emojiList.map((ele) => {
        ele.tags.map((element) => {
            if(element.startsWith(inputText.toLowerCase())) {
                filteredData.push(ele);
                store.innerHTML += `
                <tr>
                    <td id="EmojiIcon">${ele.emoji}</td>
                    <td id="EmojiTags">${ele.aliases}</td>
                    <td id="EmojiName">${ele.description}</td>
                </tr>
                `
            }
        })
    })
    console.log(filteredData);   
}