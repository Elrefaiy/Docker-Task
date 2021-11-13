const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req,res) => {
    res.send('(cs) أحمد محمد ابراهيم الرفاعى ابراهيم || سكشن 1')
})

app.listen(PORT, () => {
    console.log('Section_Test application listining at http://localhost:3000')
})