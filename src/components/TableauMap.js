import React from 'react'

const TableauMap = () => {
  return (
    <>
      <div class='tableauPlaceholder' id='viz1585421499374' style={{position: 'relative'}}>
        <noscript>
          <a href='https://public.tableau.com/shared/D7GF7WNQF?:display_count=y&:origin=viz_share_link'>
            <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;D7&#47;D7GF7WNQF&#47;1_rss.png' style={{border: 'none'}} />
          </a>
        </noscript>
        
        <object class='tableauViz'  style={{display: 'none'}}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='path' value='shared&#47;D7GF7WNQF' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;D7&#47;D7GF7WNQF&#47;1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='filter' value='publish=yes' />
        </object>
      </div>
      <script type='text/javascript'>
        var divElement = document.getElementById('viz1585421499374');
        var vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width='1000px';vizElement.style.height='827px';
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      </script>
    </>
  )
}

export default TableauMap