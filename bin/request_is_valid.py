import requests as rq

def request_is_valid(url, headers):
    exception_raised = False
    try:
        response = rq.get(url, headers=headers)
    except rq.HTTPError as http_err:
        print(f"HTTP Error: {http_err}")
        exception_raised = True
    except rq.ConnectionError as conn_err:
        print(f"Connection Error: {conn_err}")
        exception_raised = True
    except rq.Timeout as timeout_err:
        print(f"Timeout Error: {timeout_err}")
        exception_raised = True
    except rq.TooManyRedirects as redir_err:
        print(f"Redirect Error: {redir_err}")
        exception_raised = True
    
    if exception_raised:
        return False
    else:
        if response.status_code != 200:
            print(response.status_code)
            return False
        else:
            return True
    
    """
    status = ""
    switcher = {
        200: "OK",
        201: "Created",
        204: "No Content",
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
    }

    if response in switcher:
        status = switcher.get(response)
    elif response >= 100 and response < 200:
        status = "1xx - Informational"
    elif response >= 200 and response < 300:
        status = "2xx - Success"
    elif response >= 300 and response < 400:
        status = "3xx - Redirection"
    elif response >= 400 and response < 500:
        status = "4xx - Client Error"
    elif response >= 500 and response < 600:
        status = "5xx - Server Error"
    else:
        status = "Unknown HTTP Status Code!"
    """
