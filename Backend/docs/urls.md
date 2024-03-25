### Endpoint Documentation for the Frontend Developer

Access the Django admin endpoint:
http://127.0.0.1:8000/admin/


#### Categories Endpoint

- Get a list of all categories:
```
method:GET
http://127.0.0.1:8000/app/categories/
```

- Retrieve a single category:

```
method:GET
http://127.0.0.1:8000/app/categories/<category_slug>/
```


#### Items Endpoint

- Get a list of all items:

```
method:GET
http://127.0.0.1:8000/app/items/
```

- Retrieve a single item:

```
method:GET
http://127.0.0.1:8000/app/items/<item_slug>/
```


#### Ingredients of an Item

- Get a list of all item ingredients:

```
method:GET
http://127.0.0.1:8000/app/items/<item_slug>/ingredients/
```

- Retrieve a single ingredient:

```
method:GET
http://127.0.0.1:8000/app/items/<item_slug>/ingredients/<item_ingredient_id>/
```



#### Food Values of an Item

- Get a list of all item food values:

```
method:GET
http://127.0.0.1:8000/app/items/<item_slug>/food-values/
```

- Retrieve a single food value:

```
method:GET
http://127.0.0.1:8000/app/items/<item_slug>/food-values/<food_value_id>/
```