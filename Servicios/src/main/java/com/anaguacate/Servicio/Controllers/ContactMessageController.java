@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*") // Para permitir peticiones desde React
public class ContactMessageController {
    @Autowired
    private ContactMessageService service;

    @PostMapping
    public ResponseEntity<ContactMessage> submitMessage(@RequestBody ContactMessage message) {
        ContactMessage saved = service.save(message);
        return ResponseEntity.ok(saved);
    }
}