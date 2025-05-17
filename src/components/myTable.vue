<script setup>
 

</script>

<template>
<div class="table-container">
  <table>  
   
    <slot name="thead">
      <thead>
        <tr>
          <th>berfore..</th>
          <th>What?</th>
          <th>After..</th>
          <th>After..</th>
        </tr>
      </thead>
    </slot>
    <tbody>
      <slot name="rows">
        <tr>
          <td>1 </td>
          <td>Reviews </td>
          <td>efe </td>
          <td>222</td>
        </tr> 
        <tr>
          <td>2 </td>
          <td>Reviews </td>
          <td>asd </td>
          <td>334</td>
        </tr> 
        <tr>
          <td>3 </td>
          <td>Reviews </td>
          <td>FGB </td>
          <td>535</td>
        </tr> 
      </slot>
       
    </tbody>
  </table>
</div>
</template>
 