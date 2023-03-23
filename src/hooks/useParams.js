export const useParams = ({
  fitlers,
  startOfDay,
  endOfDay,
  firstDayOfWeek,
  lastDayOfWeek,
  startDayFrom,
  startDayTo,
  startOfMonth,
  endOfMonth,
  countryExclude,
  tagsExclude,
  ipsExclude,
}) => {
  let params = new URLSearchParams()
  Object.keys(fitlers).map(filterName => {
    if (filterName === 'dateCreate') {
      fitlers[filterName].map(item => {
        if (item === 'today') {
          params.append('start_date_from', startOfDay.toISOString())
          params.append('start_date_to', endOfDay.toISOString())
        } else if (item === 'toweek') {
          params.append('start_date_from', firstDayOfWeek.toISOString())
          params.append('start_date_to', lastDayOfWeek.toISOString())
        } else if (item === 'custom') {
          params.append('start_date_from', startDayFrom)
          params.append('start_date_to', startDayTo)
        } else {
          params.append('start_date_from', startOfMonth.toISOString())
          params.append('start_date_to', endOfMonth.toISOString())
        }
      })
    } else if (filterName === 'dateOver') {
      fitlers[filterName].map(item => {
        if (item === 'today') {
          params.append('end_date_from', startOfDay.toISOString())
          params.append('end_date_to', endOfDay.toISOString())
        } else if (item === 'toweek') {
          params.append('end_date_from', firstDayOfWeek.toISOString())
          params.append('end_date_to', lastDayOfWeek.toISOString())
        } else {
          params.append('end_date_from', startOfMonth.toISOString())
          params.append('end_date_to', endOfMonth.toISOString())
        }
      })
    } else if (filterName === 'countries') {
      if (countryExclude) {
        fitlers[filterName].map(item => {
          params.append('countries_exclude', item.toString())
        })
      } else {
        fitlers[filterName].map(item => {
          params.append('countries', item.toString())
        })
      }
    } else if (filterName === 'tags') {
      if (tagsExclude) {
        fitlers[filterName].map(item => {
          params.append('tags_exclude', item.toString())
        })
      } else {
        fitlers[filterName].map(item => {
          params.append('tags', item.toString())
        })
      }
    } else if (filterName === 'access_ips') {
      if (ipsExclude) {
        fitlers[filterName].map(item => {
          params.append('access_ips_exclude', item.toString())
        })
      } else {
        fitlers[filterName].map(item => {
          params.append('access_ips', item.toString())
        })
      }
    } else {
      fitlers[filterName].map(item => {
        params.append(filterName, item.toString())
      })
    }
  })
  return { params }
}
