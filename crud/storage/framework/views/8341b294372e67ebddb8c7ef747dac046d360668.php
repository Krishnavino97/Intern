<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Authentication</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
     integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="body">
        <div class="row">
           <div class="col-md-4 col-md-offset-4" style="margin-top:20px;">
               <div class="h4">Welcome To Dashboard !!!</div>
               <hr>
               <table class="table">
                   <thead>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Action</th>
                   </thead>
                   <tbody>
                       <tr>
                  
                          <td><?php echo e($data->name); ?></td>
                           <td><?php echo e($data->email); ?></td>
                           <td><a href="logout">Logout</a></td>
             
                        </tr>
                   </tbody>
               </table>
               
            <br>
           
           </div>
        </div>
    </div>
    
</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossorigin="anonymous"></script>
</html>
<?php /**PATH C:\xampp\htdocs\crud\resources\views/dashboard.blade.php ENDPATH**/ ?>