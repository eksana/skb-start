import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World hi',
  });
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!Hi');
});

function canonize(url){
	//const username='somthing';
	const re=new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)([a-zA-Z0-9]*)','i');
	//const re=new RegExp('@([a-zA-Z0-9])');
	const username=url.match(re);
	return username;
}

const arr=['https://vk.com/igor.suvorov',
'https://twitter.com/suvorovigor',
'https://telegram.me/skillbranch',
'@skillbranch',
'https://vk.com/skillbranch?w=wall-117903599_1076'
];

arr.forEach((url)=>{
	const username=canonize(url);
	console.log(username);

});