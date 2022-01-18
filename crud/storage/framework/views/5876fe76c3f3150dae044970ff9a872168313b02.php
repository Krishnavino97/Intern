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
               <div class="h4">Registration</div>
               <hr>
               <form action="<?php echo e(route('register-user')); ?>" method="post">
                   <?php echo csrf_field(); ?>
                   <?php if(Session::has('success')): ?>
                   <div class="alert alert-success">
                       <?php echo e(Session::get('success')); ?>

                   </div>
                   <?php endif; ?>

                   <?php if(Session::has('fail')): ?>
                   <div class="alert alert-danger">
                       <?php echo e(Session::get('fail')); ?>

                   </div>
                   <?php endif; ?>

                <div class="form-group">
                    <label for="name"> Full Name </label>
            <input type="text" class="form-control" placeholder="Enter Full Name" name="name" value="<?php echo e(old('name')); ?>">
                <span class="text-danger"><?php $__errorArgs = ['name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <?php echo e($message); ?> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?></span>
                </div>

                <div class="form-group">
                    <label for="email"> Email </label>
                    <input type="text" class="form-control" placeholder="Enter Email" name="email" value="<?php echo e(old('email')); ?>">
                    <span class="text-danger"><?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <?php echo e($message); ?> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?></span>
                </div>

                <div class="form-group">
                    <label for="password"> Password </label>
                    <input type="password" class="form-control" placeholder="Enter Password" name="password" value="<?php echo e(old('password')); ?>">
                    <span class="text-danger"><?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> <?php echo e($message); ?> <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?></span>
                </div>

                <div class="form-group">
                    <button class="btn btn-block btn-primary" type="submit">
                        Register
                    </button>
                </div>
            </form>
            <br>
            <a href="login">Already Registered? Login Here!</a>
           </div>
        </div>
    </div>
    
</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossorigin="anonymous"></script>
</html><?php /**PATH C:\xampp\htdocs\crud\resources\views/auth/registration.blade.php ENDPATH**/ ?>