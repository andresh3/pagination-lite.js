function paginate(N, current_page, max_elements=5)
{
  /*
    Given a list of 1..N, we want to return
    a pagination list given our current page.
    0 is ellipsis, and counts as an element.
    
    Example:
    paginate(100,7,max_elements=5)
    = [1 0 7 0 100]
    0's count.
    
    For simplicities sake, max_elements must be
    odd. 
  */
  if(max_elements % 2 != 1)
    {
      throw ('max_elements must be odd');
    }
  if(max_elements < 5)
    {
      throw ('max_elements must be at least 5')
    }
  
  // Check to see if we can return all
  // Elements in the list first.
  if(N<=max_elements)
      return Array.from(
        Array(N).keys().map(x=>++x)
      )
  
  /*
    Handle case of the first (m-1) pages 
    where m = max_el - 2;
  */
  length = max_elements - 2;
  if(current_page<length)
    {
      arr = Array.from(Array(length).keys().map(x=>++x));
      return arr.concat([0,N]);
    }
  // Or last several pages
  if(current_page > N-length + 1)
    {
      arr = Array.from(
        Array(length).keys().map(x=>N-x)
      ).reverse();
      return [1,0].concat(arr);
    }
  
   // Anything inbetween
   // This will take a minimum of 4 spots
   // [1, 0, ..., 0, N]
   
  length = max_elements - 4;
  // Should be centered around current_page
  var middle_start_index = current_page - Math.floor(length/2);
  var middle_list = Array.from(
    Array(length).keys().map(x=>x+middle_start_index)
  )
  return [1,0].concat(middle_list).concat([0,N]);
 
}
