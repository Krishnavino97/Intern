
<?php $__env->startSection('content'); ?>
 
 
<div class="card">
  <div class="card-header">Contactus Page</div>
  <div class="card-body">
   
 
        <div class="card-body">
        <h5 class="card-title">Name : <?php echo e($contacts->name); ?></h5>
        <p class="card-text">Address : <?php echo e($contacts->address); ?></p>
        <p class="card-text">Phone : <?php echo e($contacts->mobile); ?></p>
  </div>
       
    </hr>
  
  </div>
</div>
<?php echo $__env->make('contacts.layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\crud\resources\views/contacts/show.blade.php ENDPATH**/ ?>