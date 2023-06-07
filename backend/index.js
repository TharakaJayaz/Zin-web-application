import express from "express"
import mysql from "mysql"
import cors from "cors"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import multer from 'multer';


const app = express()
const db = mysql.createConnection({
  host: "192.99.34.118",
  user: "codewithx_db_user",
  password: "Project2023",
  database: "codewithx_Project"
})

const JWT_KEY = "asdfasdfasdf";
const upload = multer({ dest: 'uploads/' })
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads/');
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   }
// });
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1024 * 1024 * 5 },
//   fileFilter: fileFilter
// });

// const bcrypt = require ('bcrypt');
// const saltRounds = 10;
// const plainTextPassword = 'password123';
// bcrypt.genSalt(saltRounds,function (err,salt){
// bcrypt.hash(plainTextPassword,salt,function(err,hash){

// });

// });


app.use(express.json());
app.use(cors());
app.use('/static', express.static('uploads'));

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Auth Failed."
    });
  }
};


app.get("/", (req, res) => {
  res.json("hello this is the backend")
});


app.get("/salesrep", checkAuth, (req, res) => {
  const q = "SELECT * FROM sales_rep"
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);

  })

});


app.post("/add", (req, res) => {
  const q = "INSERT * FROM sales_rep"
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})


app.get("/stock", (req, res) => {
  const p = "SELECT * FROM stock"
  db.query(p, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})


app.get("/salesreptemp", (req, res) => {
  const q = "SELECT * FROM sales_repTemp"
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})


app.post("/salesreptempadd", (req, res) => {
  const q = "INSERT INTO `projectwork`.`sales_rep` (`fullname`, `NIC`, `registrationdate`,  `password`,`reenterpassword`, `email`, `phonenumber`,  `sex`) VALUES (?,?,?,?,?,?,?,?);"

  const values = [
    req.body.fullname,
    req.body.NIC,
    req.body.registrationdate,
    req.body.password,
    req.body.reenterpassword,
    req.body.email,
    req.body.phonenumber,
    req.body.sex,

  ];

  // console.log(values);
  db.query(q, values, (err, data) => {
    if (err) return res.json(err)
    return res.json("salesrep values has been created temporarily successfully");
  })
});


app.post("/userpw", (req, res) => {
  const userid = req.body.userid;
  const password = req.body.password;

  db.query(
    "select * from userpw where userid=? and password =?",
    [userid, password],
    (err, result) => {
      if (err) {
        res.send({ state: false, err: err })
        return
      }
      if (result.length > 0) {
        const token = jwt.sign(
          {
            id: userid
          },
          JWT_KEY,
          {
            expiresIn: "2h"
          });
        res.send({
          status: true,
          token,
          ...result
        });
      } else {
        res.send({
          status: false,
          message: "wrong combination"
        });
      }
    }
  );
  // app.post('/userpw', async (req, res) => {
  //    const { userid, password } = req.body;

  //    try {
  //      const user = await User.findOne({ userid });

  //      if (!user) {
  //        throw new Error('User not found');
  //      }

  //      const isPasswordValid = await bcrypt.compare(password, user.password);

  //      if (!isPasswordValid) {
  //        throw new Error('Invalid password');
  //      }

  //      res.status(200).send('Login successful');
  //    } catch (error) {
  //      console.error(error);
  //      res.status(400).send(error.message);
  //    }
  //  });
});


app.get("/user", (req, res) => {
  const r = "SELECT * FROM userpw "
  db.query(r, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.post("/userreg", (req, res) => {
  const r = "INSERT INTO `projectwork`.`userpw` (`userid`, `password`) VALUES (?,?);"

  const values = [
    req.body.userid,
    req.body.password

  ];
  db.query(r, values, (err, data) => {
    if (err) return res.json(err)
    return res.json("username , password values has been created successfully");

  })
})


app.post("/stock", upload.single('image'), (req, res) => {
  const p = "INSERT INTO `projectwork`.`stock` (`stockID`, `qty`, `productname`, `name`, `price`, `manufacturedate`, `expirydate`, `discount`, `image`) VALUES (?,?,?,?,?,?,?,?,?);"

  console.log(req.body)
  const values = [
    req.body.stockID,
    req.body.qty,
    req.body.productname,
    req.body.name,
    req.body.price,
    req.body.manufacturedate,
    req.body.expirydate,
    req.body.discount,
    req.file.filename
  ];
  console.log(values);
  db.query(p, values, (err, data) => {
    if (err) return res.json(err)
    return res.json("stock values has been created successfully");
  })

  // // Delete an item from the database
  // const deleteItem = (stockId) => {
  //   connection.query('DELETE FROM items WHERE stockID = ?', [stockId], (error, results) => {
  //     if (error) {
  //       console.error(error);
  //     } else {
  //       console.log(`Deleted item with ID ${stockId}`);
  //     }
  //   });
  // };

  // // Call the deleteItem function with the ID of the item you want to delete
  // deleteItem(stockID);



})

app.post("/salesrep", (req, res) => {
  const q = "INSERT INTO `projectwork`.`sales_rep` (`RID`, `NIC`, `registrationdate`, `fullname`, `password`, `email`, `phoneNo`, `type`, `address`) VALUES (?,?,?,?,?,?,?,?,?);"
  const values = [
    req.body.rid,
    req.body.nic,
    req.body.registrationdate,
    req.body.fullname,
    req.body.password,
    req.body.email,
    req.body.phoneNo,
    req.body.type,
    req.body.address
  ];

  // console.log(values);
  db.query(q, values, (err, data) => {
    if (err) return res.json(err)
    return res.json("salesrep values has been created successfully");
  })
})

app.use((req, res, next) => {
  res.status(404).json({
    status: 404
  });
})

app.listen(8800, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("on port 8800")
  }
})
