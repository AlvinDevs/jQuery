$(function() {
    
    // Handle form submission
    $('#movie-form').submit(function(event) {
      event.preventDefault();
  
      const title = $('#title').val();
      const rating = $('#rating').val();
  
      // Append movie to the movie list
      $('#movie-list').append(`
        <div class="movie">
          <span>${title} (Rating: ${rating})</span>
          <button class="remove-button">Remove</button>
        </div>
      `);
  
      // Clear form inputs
      $('#title').val('');
      $('#rating').val('');
    });
  
    // Handle movie removal
    $(document).on('click', '.remove-button', function() {
      $(this).closest('.movie').remove();
    });
  });