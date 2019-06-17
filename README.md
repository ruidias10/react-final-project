# Start project


### Start project

$ vagrant up
$ vagrant ssh



### Configure Mongo database

$ sudo /vagrant/config/mongod.sh



### Start api project

$ cd /vagrant/www/api
$ npm install
$ npm run start-dev



### Ref.

https://medium.com/@matteocontrini/how-to-setup-auth-in-mongodb-3-0-properly-86b60aeef7e8
https://medium.com/@uix/building-a-rest-api-using-node-and-mongodb-bf7ac086e8f7

**[ASYNC/AWAIT]** https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404

**[SEED]** https://medium.com/by-vinicius-reis/trabalhando-com-seeds-no-laravel-5-142829ddc32e
**[SEED]** https://www.npmjs.com/package/mongoose-seed-plus

<https://medium.com/balta-io/nodejs-async-await-21ca3636252a>

```
npm run start:seed


// Get all employees
router.get('/', employee.list);

// Get single employee by id
router.get('/show/:id', employee.show);

// Create employee
router.get('/create', employee.create);

// Save employee
router.post('/save', employee.save);

// Edit employee
router.get('/edit/:id', employee.edit);

// Edit update
router.post('/update/:id', employee.update);

// Edit update
router.post('/delete/:id', employee.delete);


```



#### Actions Handled By Resource Controller 

| Verb      | URI                    | Action  | Route Name     |
| :-------- | :--------------------- | :------ | :------------- |
| GET       | `/photos`              | index   | photos.index   |
| GET       | `/photos/create`       | create  | photos.create  |
| POST      | `/photos`              | store   | photos.store   |
| GET       | `/photos/{photo}`      | show    | photos.show    |
| GET       | `/photos/{photo}/edit` | edit    | photos.edit    |
| PUT/PATCH | `/photos/{photo}`      | update  | photos.update  |
| DELETE    | `/photos/{photo}`      | destroy | photos.destroy |

https://laravel.com/docs/5.8/controllers



### Destroy vagrant machine

$ vagrant halt
$ vagrant destroy -f
