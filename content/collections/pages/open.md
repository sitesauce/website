---
title: Open
updated_by: 1f409eaa-ea1e-4e63-bf11-8d43677e5069
updated_at: 1589459627
hide_date: true
meta_image: 'https://brand-assets.sitesauce.app/open-card.jpg'
meta_description: 'Sitesauce is an open startup! Explore our revenue, costs, and metrics on our open page.'
id: e418a3f9-53bc-4060-a40e-7203c363d567
content:
  -
    type: paragraph
    content:
      -
        type: text
        text: "Sitesauce is an Open Startup™, which means it operates fully transparent and shares its metrics, including revenue, costs, users, and\_traffic."
  -
    type: set
    attrs:
      values:
        type: last_updated
  -
    type: heading
    attrs:
      level: 3
    content:
      -
        type: text
        text: 'Monthly recurring revenue (MRR)'
  -
    type: paragraph
    content:
      -
        type: text
        text: '~'
      -
        type: text
        marks:
          -
            type: bold
        text: '${{ open:mrr }}'
      -
        type: text
        text: "\_with {{ open:customers }} paying customers & {{ open:trials }} trial users (ARR ${{open:arr}})"
  -
    type: set
    attrs:
      values:
        type: details
        title: 'What is MRR?'
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: "MRR is calculated by summing the monthly-normalized amounts of\_"
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'all active subscriptions'
              -
                type: text
                text: "\_at that time. For example, an annual subscription for $1,200 only counts $100 towards your MRR. All our revenue metrics are calculated by "
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'https://i.m1guelpf.me/baremetrics'
                      target: _blank
                      rel: null
                text: Baremetrics
              -
                type: text
                text: .
  -
    type: heading
    attrs:
      level: 3
    content:
      -
        type: text
        text: 'Monthly recurring costs (MRC)'
  -
    type: paragraph
    content:
      -
        type: text
        marks:
          -
            type: bold
        text: '~${{open:costs}}'
      -
        type: text
        text: "\_(ARC "
      -
        type: text
        text: '${{open:acosts}})'
  -
    type: set
    attrs:
      values:
        type: details
        title: 'Domain name ~$1.5'
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Sitesauce owns the sitesauce.app domain, which is registered with\_"
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'https://porkbun.com/'
                      target: _blank
                      rel: null
                text: Porkbun
              -
                type: text
                text: .
  -
    type: set
    attrs:
      values:
        type: details
        title: 'Laravel Vapor $39'
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Sitesauce uses '
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'https://vapor.laravel.com'
                      target: _blank
                      rel: null
                text: 'Laravel Vapor'
              -
                type: text
                text: ' to run its code on AWS Lambda.'
  -
    type: set
    attrs:
      values:
        type: details
        title: 'AWS ~${{ open:vaporCost }}'
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'All our infrastructure, from servers to email, runs on Amazon Web Services. The above cost is an estimate calculated by Laravel Vapor for the last 30 days.'
  -
    type: set
    attrs:
      values:
        type: details
        title: 'Baremetrics Recover $25'
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'We use '
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'https://i.m1guelpf.me/baremetrics'
                      target: _blank
                      rel: null
                text: Baremetrics
              -
                type: text
                text: ' Recover to automatically contact customers when their payments don''t go through and get them to update their credit cards'
  -
    type: paragraph
  -
    type: heading
    attrs:
      level: 3
    content:
      -
        type: text
        text: Profit
  -
    type: paragraph
    content:
      -
        type: text
        marks:
          -
            type: bold
        text: '~${{ open:profit }}'
      -
        type: text
        text: ' per month (${{ open:aprofit }} per year)'
  -
    type: paragraph
  -
    type: set
    attrs:
      values:
        type: details
        title: 'How is profit calculated?'
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'The estimate shown here is calculated by subtracting the costs from the revenue. '
  -
    type: heading
    attrs:
      level: 3
    content:
      -
        type: text
        text: 'Platform Metrics'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Sitesauce has created {{ open:deployments }} deployments for {{ open:sites }} different sites created by {{ open:users }} users. {{ open:leads }} users signed up to the waiting list while Sitesauce was on beta, but haven''t created an account yet.'
  -
    type: heading
    attrs:
      level: 3
    content:
      -
        type: text
        text: 'Pageviews in the last month'
  -
    type: paragraph
    content:
      -
        type: text
        text: "In the last month, we've had {{ open:pageviews }} pageviews. You can see additional information on\_"
      -
        type: text
        marks:
          -
            type: underline
          -
            type: link
            attrs:
              href: 'https://sitesauce.app/analytics'
              target: _blank
              rel: null
        text: 'our public analytics dashboard'
      -
        type: text
        text: ", powered by\_"
      -
        type: text
        marks:
          -
            type: underline
          -
            type: link
            attrs:
              href: 'https://i.m1guelpf.me/fathom'
              target: _blank
              rel: null
        text: 'Fathom Analytics'
      -
        type: text
        text: .
  -
    type: set
    attrs:
      values:
        type: html
        code: |
          <canvas id="chart" class="daily-view"></canvas>
          
          <script>
            function chartjsOnload() {
              Chart.defaults.global.defaultFontFamily = "'Jetbrains Mono', Brown, sans-serif"
          
              var chartOptions = {"type":"line","options":{"animation":{"duration":0},"legend":{"display":false},"elements":{"line":{"tension":0}},"scales":{"yAxes":[{"ticks":{"beginAtZero":true,"userCallback":function(label) { if (Math.floor(label) === label) return label }},"gridLines":{"color":"#d5f5f6"}}],"xAxes":[{"type":"category","ticks":{"maxRotation":0},"gridLines":{"color":"#d5f5f6"}}]},"tooltips":{"enabled":true,"mode":"index","backgroundColor":"#014451","intersect":false,"cornerRadius":3,"footerFontStyle":"normal","titleSpacing":0,"bodySpacing":0,"footerSpacing":0,"titleMarginBottom":5,"footerMarginTop":0,"yPadding":5,"caretPadding":10,"caretSize":0,"callbacks":{"title":function (tooltipItems) { return typeof datasetLabels !== 'undefined' ? datasetLabels[tooltipItems[0].index] : null },"footer":function (tooltipItems) { return tooltipItems[0].yLabel + ' page views' },"label":function () { return }}},"responsive":true,"title":{"display":false},"hover":{"mode":"index","intersect":false},"annotation":{"events":["click","mouseenter","mouseleave"],"drawTime":"afterDatasetsDraw","annotations":[]}},"data":{"labels":{{ open:viewLabels }},"datasets":[{"id":"main","backgroundColor":"rgba(22, 189, 202, 0.3)","borderColor":"#16bdca","data":{{ open:viewVisits }},"pointHoverBorderWidth":0,"pointHoverBorderColor":"#16bdca","pointHoverBackgroundColor":"#16bdca","steppedLine":false}]}}
              var ctx = document.getElementById('chart').getContext('2d')
          
              new Chart(ctx, chartOptions)
            }
          </script>
          
          <script>
            (function() {
              var s = document.createElement('script')
              s.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js'
              s.onload = chartjsOnload
              document.body.appendChild(s)
            })()
          </script>
---
